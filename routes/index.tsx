import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome Hamstag
      </p>
      <p>add new line</p>
      <p>add more line</p>
      <Counter start={3} />
    </div>
  );
}
