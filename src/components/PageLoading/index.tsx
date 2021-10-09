import ContentLoader from 'react-content-loader'

export const PageLoading = (props: any) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="80vh"
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="20" rx="2" ry="2" width="100%" height="29" />
    <rect x="0" y="60" rx="2" ry="2" width="100%" height="400" />
  </ContentLoader>
)
