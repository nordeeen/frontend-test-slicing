import React from 'react'


const titles = [
  {
    id: 1,
    text: 'Jual Beli Sampah',
    desc: 'Stok sampah terbesar',
  },
  {
    id: 2,
    text: 'Social Commerce',
    desc: 'Gabung menjadi agen',
  },
  {
    id: 3,
    text: 'Produksi Eco-Friendly',
    desc: 'Bikin brand eco-friendly',
  },
];


const Features = () => {
  return (
    <div className="w-full h-auto flex justify-around items-center px-6 py-3 mb-14">
      {titles.map((val) => {
        return (
          <div key={val.id} className={`${val.id === 1 ? "w-[380px] py-4 px-4 bg-white border-2 border-[#2E7D32] rounded-xl" : ""}`}>
            <h4 className="text-3xl font-semibold text-orange-600 text-left">
              {val.text}
            </h4>
            <p className="text-lg font-semibold text-[#2E7D32] text-left">
              {val.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Features