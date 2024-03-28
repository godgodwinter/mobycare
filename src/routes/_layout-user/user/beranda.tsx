import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout-user/user/beranda")({
  component: LayoutAComponent,
});
import { FaCircleUser, FaArrowTrendUp, FaArrowDown } from "react-icons/fa6";
import Berita1 from "@/assets/mobycare/berita_1.png";
import Berita2 from "@/assets/mobycare/berita_2.png";
function LayoutAComponent() {
  return (
    <>
      <div className="card bg-base-100 shadow-md">
        <div className="card-body ">
          <div className="flex space-x-4">
            <div className="py-1">
              <FaCircleUser size={40} />
            </div>
            <div>
              {" "}
              <h2 className="card-title font-bold">Dilan</h2>
              <p className="font-thin">1 Tahun 1 Bulan</p>
            </div>
          </div>
          <div className="flex justify-between text-center leading-relaxed">
            <div className="card bg-base-200 py-6 px-4">
              <h4 className="font-bold">Status Gizi</h4>
              {/* <div className="py-2 px-2 font-bold bg-pink-200 text-pink-700">
                Obesitas
              </div> */}
              <a className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                <span>Obesitas</span>
                <FaArrowDown />
              </a>
            </div>
            <div className="card bg-base-200 py-6 px-4">
              <h4 className="font-bold">Jadwal</h4>
              {/* <div className="py-2 px-2 bg-white font-light ">
                Ada 3 jadwal Vaksinasi
              </div> */}
              <a className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                <span>Ada 3 jadwal Vaksinasi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 py-2 px-2 gap-2  ">
        <div className="grid-cols-1">
          <CardMenu Icon={FaCircleUser} label="Perkembangan" />
        </div>
        <div className="grid-cols-1">
          <CardMenu Icon={FaArrowTrendUp} label="Status Gizi" />
        </div>
        <div className="grid-cols-1">
          <CardMenu Icon={FaArrowTrendUp} label="Parenting" />
        </div>
        <div className="grid-cols-1">
          <CardMenu Icon={FaArrowTrendUp} label="Komunitas" />
        </div>

        <div className="grid-cols-1">
          <CardMenu Icon={FaArrowTrendUp} label="Artikel & Video" />
        </div>

        <div className="grid-cols-1">
          <CardMenu Icon={FaArrowTrendUp} label="Resep Makanan" />
        </div>
      </div>
      <div className="divider -mt-1 -mb-1"></div>
      <div className="py-4 px-2 flex justify-center pb-10">
        <div className="space-y-2">
          <CardBerita
            Image={Berita1}
            title={"9 Tips Mudik Lebaran bawa bayi"}
          />
          <CardBerita
            Image={Berita2}
            title={
              "Atasi KLB, Imunisasi Polio Tambahan Digelar Serentak di 3 Tempat"
            }
          />
        </div>
      </div>
    </>
  );
}

interface CardMenuProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export const CardMenu: React.FC<CardMenuProps> = ({ Icon, label }) => {
  return (
    <div className="relative text-center py-1 group overflow-hidden p-1 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
      <div className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10 "></div>

      <div className="relative">
        <div className="w-full flex justify-center">
          <div className=" border border-green-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
            <Icon />
          </div>
        </div>
        <div className="mt-1 rounded-b-[--card-border-radius]">
          <p className="text-gray-700 dark:text-gray-300 font-medium text-xs">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

interface CardBeritaProps {
  Image: string;
  title: string;
}

const CardBerita: React.FC<CardBeritaProps> = ({ Image, title }) => {
  return (
    <>
      <div className="py-2 card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          {/* <p>{desc}</p> */}
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Baca Selengkapnya</div>
          </div>
        </div>
      </div>
    </>
  );
};
