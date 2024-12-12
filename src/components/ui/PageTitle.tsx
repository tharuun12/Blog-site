interface PageTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function PageTitle({ children, subtitle }: PageTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{children}</h1>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}