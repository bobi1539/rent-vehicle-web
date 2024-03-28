import React from "react";
import AdminLayout from "../../layouts/admin/AdminLayout";
import ButtonPrimary from "../../components/button/ButtonPrimary";

const Category: React.FC = () => {
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
      <div className="bg-white mt-5 rounded-md p-4 h-[100rem]">
        <h1>Hello</h1>
      </div>
    </AdminLayout>
  );
};

export default Category;
