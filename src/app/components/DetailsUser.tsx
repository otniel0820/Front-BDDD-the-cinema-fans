import React, { FunctionComponent } from "react";
import { UserDTO } from "../interfaces/usersEntity";
import { format } from "path";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import { InputText } from "./InputText";
import Link from "next/link";
import { boolean } from "zod";
import { Button } from "./Button";
import { updateUser } from "../data/api";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

type User = {
  user: UserDTO;
};
const DetailsUser: FunctionComponent<User> = ({ user }) => {
  const userDetail = user;
  const router = useRouter();

  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      name: userDetail.name || "",
      contactDate: userDetail.contactDate || "",
      divice: userDetail.divice || "",
      address: userDetail.address || "",
      city: userDetail.city || "",
      // createdAt:
      //   format(parseISO(userDetail.publicationDate), "yyyy-MM-dd") || "",
      // eventDate: format(parseISO(userDetail.eventDate), "yyyy-MM-dd") || "",
      status: userDetail.status || "",
      followUp: userDetail.followUp || "",
      followUpDate: userDetail.followUpDate || "",
      comments: userDetail.comments || "",
      isClient: userDetail.isClient || "",
      source: userDetail.source || "",
    },
  });

  const updateToast = () => toast("El usuario ha sido modificado");
  const handleOnSubmit =  (data: any) => {
    updateUser(userDetail.id, data);
    updateToast();
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };
  return (
    <div className="flex flex-col gap-10">
      <section className="flex  items-center">
        <Link href={"/"}>
          <h1 className="font-semibold">Usuarios</h1>
        </Link>
        <ChevronRight />
        <h3 className="text-xl font-bold">{userDetail.name}</h3>
      </section>
      <form
        className="flex flex-col gap-6 w-full border-2 border-gray-700 rounded-lg p-5 bg-slate-400"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <article className="sm:col-span-4 w-full flex gap-20">
          <section className="sm:col-span-4 w-full flex flex-col gap-7">
            <Controller
              control={control}
              name="name"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="name"
                    label="Nombre"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="contactDate"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="contactDate"
                    label="Fecha de contacto"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="divice"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="divice"
                    label="Dispositivo"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="address"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="address"
                    label="Direccion"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="city"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="city"
                    label="Ciudad"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="status"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="status"
                    label="Estatus"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
          </section>
          <section className="sm:col-span-4 w-full flex flex-col gap-7">
            
            <Controller
              control={control}
              name="followUp"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="followUp"
                    label="Seguimiento"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="source"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="source"
                    label="Fuente"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="followUpDate"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="followUpDate"
                    label="Fecha de seguimiento"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="comments"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="comments"
                    label="Comentarios"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="isClient"
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <div className="flex space-x-10 items-center sm:col-span-4 w-full">
                  <InputText
                    id="isClient"
                    label="Es cliente"
                    value={value || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    containerClassName="sm:col-span-4 w-full"
                    inputClassName="rounded-[0.3em] h-full sm:w-full"
                  />
                </div>
              )}
            />
          </section>
        </article>
        <div className="flex  gap-2 justify-center">
          <Button variant={"primary"} size={"lg"} className="rounded-lg">
            Guardar
          </Button>
          <Link href={"/banner"}>
            <Button variant={"secondary"} size={"lg"} className="rounded-lg">
              Cancelar
            </Button>
          </Link>
        </div>
      </form>
      <Toaster
        toastOptions={{ style: { background: "#239e48", color: "#fff" } }}
      />
    </div>
  );
};

export default DetailsUser;
