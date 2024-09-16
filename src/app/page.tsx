import Image from "next/image";

export default function Home() {
  // 스토리지 저장 후 어플리케이션 초기 로드 시 redux에 유저 데이터 셋팅

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     dispatch(login(JSON.parse(storedUser)));
  //   }
  // }, [dispatch]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}
        <div className="animate-wiggle max-w-sm mx-auto p-6 flex items-center bg-white rounded-xl shadow-md space-x-4">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/interests"
            rel="noopener noreferrer"
          >
            나의 관심사 등록하기
          </a>
        </div>
        <div className="w-16 h-16 bg-main300 rounded-full animate-bubble"></div>
      </div>
    </main>
    // <ReduxProvider>
    //   <main className="w-full h-screen grid grid-cols-2 place-items-center">
    //     <AuthUpdater />
    //     <AuthViewer />
    //   </main>
    // </ReduxProvider>
  );
}
