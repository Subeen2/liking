"use client";

import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import * as THREE from "three";

export default function UserInterestsPage({
  params,
}: {
  params: { id: string };
}) {
  // Redux에서 user 정보를 가져옵니다.
  const user = useSelector((state: RootState) => state.userAuth);
  const { id } = params;
  const router = useRouter();

  const mountRef = useRef<HTMLDivElement | null>(null);

  const [isMounted, setIsMounted] = useState(false);
  // TODO :: 가독성 떨어지므로 데이터 형식 수정 필요
  const userUID = user.user?.user_uid;

  // 사용자 ID와 Redux에 저장된 ID가 일치하는지 확인
  useEffect(() => {
    if (!user || userUID !== id) {
      // 사용자 정보가 없거나 ID가 일치하지 않으면 로그인 페이지로 리다이렉트
      router.push("/login");
    }
  }, [user, id, router]);

  if (!isMounted) {
    // 서버와 클라이언트가 일치할 때까지 아무것도 렌더링하지 않음
    return null;
  }

  if (!user || userUID !== id) {
    return <p>Loading...</p>; // 데이터를 불러올 때까지 로딩 표시
  }

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer 생성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      (window.innerWidth * 0.7) / window.innerHeight,
      0.1,
      1000
    );

    // 창 크기가 변경될 때 캔버스 크기도 업데이트
    window.addEventListener("resize", () => {
      // 브라우저 창의 크기에 맞게 canvas 크기 조정
      const width = window.innerWidth * 0.7;
      const height = window.innerHeight;

      // 렌더러 크기 설정
      renderer.setSize(width, height);

      // 카메라 종횡비 업데이트
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // 배경색을 흰색으로 설정
    mount.appendChild(renderer.domElement); // mountRef에 렌더러 추가

    // 조명 추가
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // 비눗방울 생성 함수
    function createBubble() {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x87cefa, // 예쁜 파란색 (Sky Blue)
        transparent: true,
        opacity: 0.6,
        shininess: 100,
      });

      const bubble = new THREE.Mesh(geometry, material);
      bubble.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      bubble.scale.set(0.1, 0.1, 0.1);

      scene.add(bubble);
      return bubble;
    }

    // 비눗방울 20개 생성
    const bubbles: THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>[] =
      [];
    for (let i = 0; i < 20; i++) {
      bubbles.push(createBubble());
    }

    // 카메라 위치
    camera.position.z = 15;

    // 애니메이션
    function animate() {
      requestAnimationFrame(animate);

      // 각 비눗방울을 조금씩 크게 하고, 위치를 약간 이동
      bubbles.forEach((bubble) => {
        bubble.scale.x += 0.01;
        bubble.scale.y += 0.01;
        bubble.scale.z += 0.01;

        bubble.position.y += 0.02; // 위로 살짝 이동
      });

      renderer.render(scene, camera);
    }

    animate();

    // Clean up on unmount
    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement); // mount에서 renderer 제거
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-5 px-44 py-10">
      <div>
        <button
          type="button"
          className="flex items-center justify-center text-lg border border-gray-2 py-2 rounded-3xl font-medium w-full sm:py-2 sm:text-base md:text-md"
        >
          추가
        </button>
      </div>
    </div>
  );
}
