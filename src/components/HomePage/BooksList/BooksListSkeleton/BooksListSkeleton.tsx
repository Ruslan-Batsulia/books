"use client";

import "./BooksListSkeleton.scss";

type BooksListSkeletonProps = {
  skeletonCount: number;
};

export default function BooksListSkeleton({skeletonCount}: BooksListSkeletonProps) {
  return (<>{
    [...Array(skeletonCount)].map((_, i) => {
      return (
        <div key={i} className={"books-list-skeleton__skeleton-card-container"}>
          <div className={"books-list-skeleton__skeleton-card-icon-container skeleton-container"}>
            <div className={"books-list-skeleton__skeleton-card-icon-skeleton skeleton"} />
          </div>
  
          <div className={"books-list-skeleton__skeleton-card-info-container"}>
            <div className={"books-list-skeleton__skeleton-card-info-title-container skeleton-container"}>
              <div className={"books-list-skeleton__skeleton-card-info-title-skeleton skeleton"} />
              <div className={"books-list-skeleton__skeleton-card-info-title-skeleton skeleton"} />
            </div>
  
            <div className={"books-list-skeleton__skeleton-card-info-author-container skeleton-container"}>
              <div className={"books-list-skeleton__skeleton-card-info-author-skeleton skeleton"} />
              <div className={"books-list-skeleton__skeleton-card-info-author-skeleton skeleton"} />
            </div>
          </div>
        </div>
      )
    })
  }</>);
};
