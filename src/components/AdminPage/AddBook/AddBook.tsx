"use client";

import { useGetSubjectsQuery } from "@/src/common/services/api/subjectsApi";
import DropdownSelect from "@/src/components/common/Dropdown/Dropdown";

import type { Subject } from "@/src/common/types";
import ThemeIcon from "@/public/images/dropdown/theme/theme.svg";

import "./AddBook.scss";

type Option = {
  label: string;
  value: string;
};

export default function AddBook() {
  const {
    data: subjectsData,
    isLoading: subjectsIsLoading,
    isFetching: subjectsIsFetching,
  } = useGetSubjectsQuery({ limit: 20, offset: 0 });

  const subjectsResults: Subject[] = subjectsData?.data || [];
  const subjectsOptions: Option[] = subjectsResults.map((subject) => ({
    value: subject.id,
    label: subject.name,
  }));

  return (
    <section className={"add-book"}>
      {
        (subjectsIsLoading || subjectsIsFetching) ? (
          <div>{"Завантаження"}</div>
        ) : (
          <DropdownSelect
            options={subjectsOptions}
            currentValue={subjectsOptions[0].value}
            onChange={() => {}}
            icon={ThemeIcon}
          />
        )
      }
    </section>
  );
};
