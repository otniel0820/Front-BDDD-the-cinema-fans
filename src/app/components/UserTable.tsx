import React, { FunctionComponent, useMemo, useState } from "react";
import Table from "./Table";
import { UserDTO } from "../interfaces/usersEntity";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { InputText } from "./InputText";
import { Button } from "./Button";

type User = {
  users: UserDTO[];
};

const UserTable: FunctionComponent<User> = ({ users }) => {
  const [filter, setFilter] = useState<string>("");
  const columnHelper = createColumnHelper<UserDTO>();
  const columns = useMemo(()=>{
    return [
    columnHelper.accessor((row) => row.name, {
      id: "userName",
      header: () => "Clientes",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center p-5">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.name}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.city, {
      id: "city",
      header: () => "Ciudad y/o direccion",
      cell: (item) => (
        <div className="flex flex-col justify-center text-[#AFAFAF] items-center">
          <p>{item.row.original.city}</p>
          <p>{item.row.original.address}</p>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.contactDate, {
      id: "contactDate",
      header: () => "Fecha de contacto",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.contactDate}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.comments, {
      id: "comments",
      header: () => "Fecha de comentarios",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.comments}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.divice, {
      id: "divice",
      header: () => "Dispositivo",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.divice}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.followUp, {
      id: "followUp",
      header: () => "Seguimiento",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.followUp}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.followUpDate, {
      id: "followDate",
      header: () => "Fecha de seguimiento",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.followUpDate}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.status, {
      id: "status",
      header: () => "Estatus",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.status}
          </Link>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.isClient, {
      id: "isClient",
      header: () => "Es cliente",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/user/${item.row.original.id}`}>
            {item.row.original.isClient}
          </Link>
        </div>
      ),
    }),
  ];
  },[columnHelper])
  
  

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Usuarios Panel</h1>
      <article className="w-full flex items-center justify-between">
      <InputText
          value={filter}
          id="Search"
          label="Buscar"
          onChange={(e) => setFilter(e.target.value)}
          inputClassName="rounded-[3px]"
          containerClassName="flex items-center gap-2"
        />
        <div className="flex gap-4">
        <Link href={"/banner/new_banner"}>
            <Button variant={"primary"} size={"xl"} className="rounded-[5px]">
              Nuevo usuario
            </Button>
          </Link>
          <Button
            variant={"secondary"}
            size={"xl"}
            className="rounded-[5px] hover:bg-red-500 hover:text-white"
            // onClick={() => {
            //   setIsModal(!isModal);
            // }}
            // disabled={bannerSelected.length > 0 ? false : true}
          >
            Eliminar
          </Button>
        </div>
      </article>

      <Table data={users} columns={columns} filter={filter}/>
    </div>
  );
};

export default UserTable;
