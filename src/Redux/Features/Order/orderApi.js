import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../Utils/getBaseURL.js";
import { getOrdersByEmail } from "../../../../../server/src/orders/order.controller.js";

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseURL()}/api/orders`,
  credentials: "include",
});

const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
    }),
    getOrdersByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = ordersApi;
export default ordersApi;
