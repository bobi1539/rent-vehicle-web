import React from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import InputSimple from "../../components/input/InputSimple";
import Pagination from "../../components/pagination/Pagination";
import ButtonOutline from "../../components/button/ButtonOutline";

interface CategoryData {
  id: number;
  name: string;
  description: string;
}

const Category: React.FC = () => {
  let no = 1;
  const categories: CategoryData[] = [
    { id: 1, name: "Mobil", description: "Bagus Sekali" },
    { id: 2, name: "Motor", description: "Bagus Sekali" },
    { id: 3, name: "Bus", description: "Bagus Sekali" },
    { id: 4, name: "Bus", description: "Bagus Sekali" },
    { id: 5, name: "Bus", description: "Bagus Sekali" },
    { id: 6, name: "Bus", description: "Bagus Sekali" },
    { id: 7, name: "Bus", description: "Bagus Sekali" },
    { id: 8, name: "Bus", description: "Bagus Sekali" },
    { id: 9, name: "Bus", description: "Bagus Sekali" },
    { id: 10, name: "Bus", description: "Bagus Sekali" },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AdminLayout>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-600 me-auto">
          Kategori
        </h1>
        <ButtonPrimary
          label="Tambah"
          type="button"
          icon="plus"
          padding="ps-1 pe-2 py-1"
        />
      </div>
      <div className="bg-white mt-5 p-6 rounded-md">
        <form action="#" onSubmit={handleSearch}>
          <div className="flex justify-between md:grid md:grid-cols-2 gap-2">
            <InputSimple
              name="categoryName"
              type="search"
              placeHolder="Nama Kategori..."
            />
            <ButtonOutline
              type="submit"
              icon="bx-search bx-sm"
              width="w-fit"
              padding="px-2"
              variant="btn-outline-primary"
            />
          </div>
        </form>
        <div className="mt-6 overflow-x-auto">
          <table className="border-collapse w-full rounded-xl border border-spacing-10 whitespace-nowrap text-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <td className="p-3 font-semibold">No</td>
                <td className="p-3 font-semibold">Nama Kategori</td>
                <td className="p-3 font-semibold">Deskripsi</td>
                <td className="p-3 font-semibold text-center">Aksi</td>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr className="border-b border-b-gray-100" key={category.id}>
                  <td className="p-3">{no++}</td>
                  <td className="p-3">{category.name}</td>
                  <td className="p-3">{category.description}</td>
                  <td className="p-3 flex justify-center gap-1">
                    <ButtonOutline
                      type="button"
                      icon="bx-show-alt"
                      variant="btn-outline-primary"
                    />
                    <ButtonOutline
                      type="button"
                      icon="bx-trash"
                      variant="btn-outline-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </AdminLayout>
  );
};

export default Category;
