"use client";

import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { StoreType } from "@/src/common/redux";
import { useGetBooksQuery } from "@/src/common/services";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

import "./ReadingProgress.scss";

export default function ReadingProgress() {
  const translate = useTranslations("Header");
  const hasMounted = useHasMounted();
  // const readingProgressState = useSelector((state: StoreType) => state.readingProgress.readingProgress);
  // const readingGoalState = useSelector((state: StoreType) => state.readingGoal.readingGoal);

  const { data, isLoading, isFetching } = useGetBooksQuery({
    limit: 0,
    offset: 0,
  });
  const readCount: number = useSelector((state: StoreType) => state.readBooks.readBooks.length);
  const booksCount: number = data?.count || 0;

  const readProgress = (hasMounted || isLoading || isFetching) ? readCount : 0;
  const readGoal = (hasMounted || isLoading || isFetching) ? booksCount : 0;

  return (
    <div className={"reading-progress"}>
      <div className={"reading-progress__title"}>
        <span className={"reading-progress__number"}>
          {readProgress}
        </span>
        <span className={"reading-progress__text"}>
          {translate("readingGoal", { count: readProgress, total: readGoal })}
        </span>
        <span className={"reading-progress__number"}>
          {readGoal}
        </span>
      </div>
      <div className={"reading-progress__bar"}>
        <div
          className={"reading-progress__filled"}
          style={{
            width: hasMounted
              ? readProgress < readGoal
              ? `${(readProgress / readGoal) * 100}%`
              : "100%"
              : "0%",
          }}
        />
      </div>
    </div>
  );
};
