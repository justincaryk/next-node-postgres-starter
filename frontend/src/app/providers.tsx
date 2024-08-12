import AuthProvider from '@/components/auth/provider';
import GraphQLProvider from '@/components/graphql/provider';
import ReactQueryProvider from '@/components/react-query/provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <GraphQLProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </GraphQLProvider>
    </AuthProvider>
  );
}
