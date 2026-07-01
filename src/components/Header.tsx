function Header({ title }: { title: string }) {
  return (
    <header className="flex h-[300px] flex-col items-center justify-center bg-surface text-fg">
      <h1 className="text-[calc(10px+2vmin)]">{title}</h1>
    </header>
  );
}

export default Header;
