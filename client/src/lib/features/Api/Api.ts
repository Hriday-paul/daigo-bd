import { testType } from '@/app/(withHeader)/tests/page';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type userDashboardResponseType = {
    reserveResult: number; totalAppoinments: number
};

type myAppoinMentType = {
    _id: string;
    email: string,
    testId: string,
    name: string,
    age: string,
    blood: string,
    bookedDate: string,
    phone: string,
    report: string;
    reportFile?: string;
    testDetails: testType[]
}

type userType = {
    name: string;
    email: string;
    password: string;
    photo: string;
    status: string
}

const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['myAppoinments'],
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
    endpoints: (builder) => ({
        userDashboardData: builder.query<userDashboardResponseType, { email: string }>({
            query: ({ email }) => `/userDash/${email}`,
        }),
        myAppoinments: builder.query<myAppoinMentType[], { email: string; type: string }>({
            query: ({ email, type }) => `/appoinments/${email}?type=${type}`,
            providesTags: ['myAppoinments']
        }),
        deleteAppoinments: builder.mutation({
            query: (id) => ({
                url: `/delAppoinment/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['myAppoinments']
        }),
        getTestResult: builder.query<myAppoinMentType[], { email: string }>({
            query: ({ email }) => `/appoinments/${email}?type=complete`,
        }),
        creatUser: builder.mutation<userType, any>({
            query: (userData) => ({
                url: `/user`,
                method: 'PUT',
                body: userData
            }),
        }),
    })
});

export const { useUserDashboardDataQuery, useMyAppoinmentsQuery, useDeleteAppoinmentsMutation, useGetTestResultQuery, useCreatUserMutation } = baseApi
export default baseApi;