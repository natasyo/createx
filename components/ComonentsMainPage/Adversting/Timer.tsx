"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Loading } from "@/components/Loading/Loading";

function Timer() {
  const timer = useMemo(() => +new Date(2023, 10, 1, 11, 0, 0, 0), []);
  // const now = useMemo(() => +new Date(), []);
  const [time, setTime] = useState<Date>();
  useEffect(() => {
    setInterval(() => setTime(new Date(+timer - +new Date())), 1000);
  }, [timer]);
  if (!time) return <Loading />;
  return (
    <div className={`flex`}>
      <div className={`mr-6`}>
        <p className={`text-xl font-bold leading-normal`}>
          {time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()}
        </p>
        <p className={`text-sm mt-1 leading-normal`}>Дней</p>
      </div>
      <div className={`mr-6`}>
        <p className={`text-xl font-bold leading-normal`}>
          {time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()}
        </p>
        <p className={`text-sm mt-1 leading-normal`}>Часов</p>
      </div>
      <div className={`mr-6`}>
        <p className={`text-xl font-bold leading-normal`}>
          {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
        </p>
        <p className={`text-sm mt-1 leading-normal`}>Минут</p>
      </div>
      <div>
        <p className={`text-xl font-bold leading-normal`}>
          {time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds()}
        </p>
        <p className={`text-sm mt-1 leading-normal`}>Секунд</p>
      </div>
    </div>
  );
}

export default Timer;
