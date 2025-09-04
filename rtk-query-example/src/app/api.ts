import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
  id: string;
  name: string;
};

const API_URL = "http://localhost:3001";

export const usersApi = createApi({
  //Api'ye benzersiz bir anahtar string  veriyoruz
  reducerPath: "usersApi",
  //Istek geldiğinde ne yapılacaksa onu burada yönetiyoruz.
  //fetchBaseQuery aslında fetch(API_URL) gibi
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  //Sunucudan gelen datayı redux'ın içerisinde adı Users olacak şekilde etiketliyoruz (Api içindeki Tag'ler burada belirtilir: "Posts", "Todos", "Products", "Credits" ...)
  tagTypes: ["Users"],
  //Endpoint listesi veriyoruz
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      //Cache id vermek için providesTags kullanıyoruz
      //Aynı zamanda ürün listesi de dönseydi;
      // ["Users", "Products"]
      providesTags: ["Users"],
    }),
    addUser: builder.mutation<User, Omit<User, "id">>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: { name: user.name },
      }),
      //Cache'i tekrar çekmek için
      //Aynı zamanda ürün listesi de ekleseydik
      //["Users", "Products"]
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
