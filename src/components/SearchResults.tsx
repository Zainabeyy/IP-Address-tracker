import type { ipDataProp } from "../type";

export default function SearchResults({data}:{data:ipDataProp}) {
  return (
    <dl className="absolute bottom-0 translate-y-1/2 z-50 bg-white flex flex-col justify-center md:items-start md:flex-row items-center md:justify-evenly py-5 md:py-6 px-8 rounded-2xl w-[calc(100%-40px)] sm:w-[70%] gap-x-3">
      <div>
        <dt>ip address</dt>
        <dd className="break-all">{data.ip}</dd>
      </div>
      <div className="line" />
      <div>
        <dt>location</dt>
        <dd>{data.location.country} {`, `} {data.location.region} {`, `} {data.location.city}</dd>
      </div>
      <div className="line" />
      <div>
        <dt>timezone</dt>
        <dd>{data.location.timezone}</dd>
      </div>
      <div className="line" />
      <div>
        <dt>isp</dt>
        <dd>{data.isp}</dd>
      </div>
    </dl>
  );
}
