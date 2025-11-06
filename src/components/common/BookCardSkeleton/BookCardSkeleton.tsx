import "./BookCardSkeleton.scss";

type BookCardSkeletonProps = {
  skeletonCount: number;
};

export default function BookCardSkeleton({skeletonCount}: BookCardSkeletonProps) {
  return (<>{
    [...Array(skeletonCount)].map((_, i) => {
      return (
        <div key={i} className={"book-card-skeleton__skeleton-card-container"}>
          <div className={"book-card-skeleton__skeleton-card-icon-container skeleton-container"}>
            <div className={"book-card-skeleton__skeleton-card-icon-skeleton skeleton"} />
          </div>
  
          <div className={"book-card-skeleton__skeleton-card-info-container"}>
            <div className={"book-card-skeleton__skeleton-card-info-title-container skeleton-container"}>
              <div className={"book-card-skeleton__skeleton-card-info-title-skeleton skeleton"} />
              <div className={"book-card-skeleton__skeleton-card-info-title-skeleton skeleton"} />
            </div>
  
            <div className={"book-card-skeleton__skeleton-card-info-author-container skeleton-container"}>
              <div className={"book-card-skeleton__skeleton-card-info-author-skeleton skeleton"} />
              <div className={"book-card-skeleton__skeleton-card-info-author-skeleton skeleton"} />
            </div>
          </div>
        </div>
      )
    })
  }</>);
};
