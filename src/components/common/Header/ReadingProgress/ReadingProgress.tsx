"use client";

import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { StoreType } from "@/src/common/redux";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

import "./ReadingProgress.scss";

export default function ReadingProgress() {
  const translate = useTranslations("Header");
  const hasMounted = useHasMounted();
  const readingProgress = useSelector((state: StoreType) => state.readingProgress.readingProgress);
  const readingGoal = useSelector((state: StoreType) => state.readingGoal.readingGoal);

  return (
    <div className={"reading-progress"}>
      <div className={"reading-progress__title"}>
        <span className={"reading-progress__number"}>
          {hasMounted ? readingProgress : 0}
        </span>
        <span className={"reading-progress__text"}>
          {translate("readingGoal")}
        </span>
        <span className={"reading-progress__number"}>
          {hasMounted ? readingGoal : 0}
        </span>
      </div>
      <div className={"reading-progress__bar"}>
        <div
          className={"reading-progress__filled"}
          style={{
            width: hasMounted
              ? readingProgress < readingGoal
              ? `${(readingProgress / readingGoal) * 100}%`
              : "100%"
              : "0%",
          }}
        />
      </div>
    </div>
  );
};
