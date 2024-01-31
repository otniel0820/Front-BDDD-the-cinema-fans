import React, { FunctionComponent, useMemo, useState } from "react";
import Table from "./Table";
import { UserDTO } from "../interfaces/usersEntity";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { InputText } from "./InputText";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import { deleteUser } from "../data/api";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "./Modal";

type User = {
  users: UserDTO[];
};

const UserTable: FunctionComponent<User> = ({ users }) => {
  const [filter, setFilter] = useState<string>("");
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [userSelected, setSelectedUser] = useState<UserDTO[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleCheckChange=(user: UserDTO)=> {
    setSelectedUser((prev) => {
      if (prev.includes(user)) {
        return prev.filter((item) => item !== user);
      } else {
        return [...prev, user];
      }
    });
  }
  const deletedToast = () => toast("El usuario ha sido eliminado");
  const handleDelete=(user:UserDTO[])=>{
    deleteUser(user)
    setIsModal(false);
    deletedToast();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  const columnHelper = createColumnHelper<UserDTO>();
  const columns = useMemo(()=>{
    const handleChangeALL = () => {
      setIsSelected(!isSelected);
      if (!isSelected) {
        setSelectedUser(users.map((user) => user));
      } else {
        setSelectedUser([]);
      }
    };
    return [
      columnHelper.accessor((row) => row.id, {
        id: "id",
        header: () => (
          <CheckBox
            id=""
            name=""
            label=""
            value={isSelected}
            onChange={() => handleChangeALL()}
            containerClassName="flex flex-col justify-center items-center"
          />
        ),
        enableSorting: false,
        cell: (item) => (
          
            <CheckBox
              id=""
              name=""
              label=""
              onChange={() => {
                handleCheckChange(item.row.original);
              }}
              value={userSelected.includes(item.row.original)}
              containerClassName="flex flex-col justify-center items-center"
            />
          
        ),
      }),
    columnHelper.accessor((row) => row.name, {
      id: "userName",
      header: () => "Clientes",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center p-5">
          <Link href={`/${item.row.original.id}`}>
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
          <p>{item.row.original.address}</p>
          <p>{item.row.original.city}</p>
        </div>
      ),
    }),
    columnHelper.accessor((row) => row.contactDate, {
      id: "contactDate",
      header: () => "Fecha de contacto",
      cell: (item) => (
        <div className="flex justify-center text-[#AFAFAF] items-center">
          <Link href={`/${item.row.original.id}`}>
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
          <Link href={`/${item.row.original.id}`}>
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
          <Link href={`/${item.row.original.id}`}>
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
          <Link href={`/${item.row.original.id}`}>
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
          <Link href={`/${item.row.original.id}`}>
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
          <Link href={`/${item.row.original.id}`}>
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
          <Link href={`/${item.row.original.id}`}>
            {item.row.original.isClient}
          </Link>
        </div>
      ),
    }),
  ];
  },[columnHelper,userSelected,isSelected, users])
  
  

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
        <Link href={"/new-user"}>
            <Button variant={"primary"} size={"xl"} className="rounded-[5px]">
              Nuevo usuario
            </Button>
          </Link>
          <Button
            variant={"secondary"}
            size={"xl"}
            className="rounded-[5px] hover:bg-red-500 hover:text-white"
            onClick={() => {
              setIsModal(!isModal);
            }}
            disabled={userSelected.length > 0 ? false : true}
            // onClick={()=>handleDelete(userSelected)}
          >
            Eliminar
          </Button>
          <Modal
            isOpen={isModal}
            onClose={() => {
              setIsModal(!isModal);
            }}
            bg="bg-[#f0e9e9]"
          >
            <div className="w-full flex flex-col items-center gap-4 rounded-">
              <div> ¿Seguro que desea eliminar este usuario?</div>
              <div className="flex justify-center gap-6">
                <Button
                  variant={"primary"}
                  className="rounded"
                  onClick={() => {
                    handleDelete(userSelected);
                  }}
                  size={"lg"}
                >
                  Si
                </Button>
                <Button
                  variant={"secondary"}
                  className="rounded"
                  onClick={() => setIsModal(!isModal)}
                  size={"lg"}
                >
                  No
                </Button>
              </div>
            </div>
          </Modal>
          <Toaster
            toastOptions={{ style: { background: "#239e48", color: "#fff" } }}
          />
        </div>
      </article>

      <Table data={users} columns={columns} filter={filter}/>
    </div>
  );
};

export default UserTable;
