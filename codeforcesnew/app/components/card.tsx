export function Card({ children }: { children: React.ReactNode }) {
    return <div className="card border rounded-lg p-4 shadow-md">{children}</div>;
  }
  
  export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="card-header font-bold text-lg">{children}</div>;
  }
  
  export function CardTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="card-title text-xl">{children}</h3>;
  }
  
  export function CardDescription({ children }: { children: React.ReactNode }) {
    return <p className="card-description text-gray-500">{children}</p>;
  }
  
  export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="card-content">{children}</div>;
  }
  