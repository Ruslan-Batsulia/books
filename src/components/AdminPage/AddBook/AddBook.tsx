"use client";

import { useEffect, useMemo, useState } from "react";
import { useGetSubjectsQuery } from "@/src/common/services/api/subjectsApi";
import DropdownSelect from "@/src/components/common/Dropdown/Dropdown";

import type { Subject } from "@/src/common/types";

import changeLanguageIcon from "@/public/images/dropdown/language/ChangeLanguage.svg";

import "./AddBook.scss";

type Option = {
  value: string;
  label: string;
};

export default function AddBook() {
  const {
    data: subjectsData,
    isLoading: subjectsIsLoading,
    isFetching: subjectsIsFetching,
  } = useGetSubjectsQuery({ limit: 20, offset: 0 });

  const subjectsResults: Subject[] = subjectsData?.data || [];
  const subjectsOptions: Option[] = useMemo(
    () =>
      subjectsResults.map((subject) => ({
        value: subject.id,
        label: subject.name,
      })),
    [subjectsResults]
  );
  const [subjectsCurrentValue, setSubjectsCurrentValue] = useState<Option>({ value: "", label: "" });

  useEffect(() => {
    if (subjectsIsLoading || subjectsIsFetching) {
      setSubjectsCurrentValue({ value: "", label: "" });
    }
  }, [subjectsIsLoading, subjectsIsFetching]);

  useEffect(() => {
    if (!subjectsIsLoading && !subjectsIsFetching && subjectsOptions.length > 0) {
      setSubjectsCurrentValue(subjectsOptions[0]);
    }
  }, [subjectsOptions, subjectsIsLoading, subjectsIsFetching]);

  const changeSubjects = (value: string) => {
    const found = subjectsOptions.find((item) => item.value === value);
    if (found) setSubjectsCurrentValue(found);
  };

  return (
    <main className={"add-book"}>
      <div className="container">
        {
          (subjectsIsLoading || subjectsIsFetching) ? (
            <div>{"Завантаження"}</div>
          ) : (
            <DropdownSelect
              options={subjectsOptions}
              currentValue={subjectsCurrentValue.value}
              onChange={changeSubjects}
              icon={changeLanguageIcon}
            />
          )
        }
      </div>
    </main>
  );
};
