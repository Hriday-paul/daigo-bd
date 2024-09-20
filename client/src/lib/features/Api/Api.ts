import { testType } from '@/app/(withHeader)/tests/page';
import { contactInput } from '@/components/Shared/ContactForm/ContactForm';
import { doctor } from '@/components/Shared/HomeDoctors/HomeDoctors';
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
}

type adminDashboardType = {
    totalAppoinments : number;
    totalTest : number;
    chart : {[key : string] : number}
}

type testinsertType = {
    name: string,
    price: number,
    slot: number,
    testDate: number,
    photo : string,
    details : string,
    email : string
}
type testupdateType = {
    name ?: string,
    price ?: number,
    slot ?: number,
    testDate ?: number,
    photo ?: string,
    details ?: string,
    email : string,
    id : string
}

const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['myAppoinments', 'tests', 'reservation', 'doctors'],
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
        creatUser: builder.mutation<any, userType>({
            query: (userData) => ({
                url: `/user`,
                method: 'POST',
                body: userData
            }),
        }),
        sendMail : builder.mutation<any, contactInput>({
            query: (contactData) => ({
                url: `/email`,
                method: 'POST',
                body: contactData
            }),
        }),
        adminDashboardData : builder.query<adminDashboardType, { prevdays: number, email : string }>({
            query: ({ prevdays, email }) => `/adminDash/${prevdays}?email=${email}`,
        }),
        allUsers : builder.query<{
            _id : string;
            name: string;
            email: string;
            password: string;
            photo : string;
        status : 'active' | 'disable',
    }[], { email : string }>({
            query: ({ email }) => `/users?email=${email}`,
        }),
        getAllTests : builder.query<testType[], { email : string }>({
            query: ({ email }) => `/allTest?email=${email}`,
            providesTags: ['tests']
        }),
        addTest : builder.mutation<any, testinsertType>({
            query: ({ name, price, slot, testDate, photo , details , email}) => ({
                url: `/addTest?email=${email}`,
                method: 'POST',
                body: { name, price, slot, testDate, photo , details ,}
            }),
            invalidatesTags: ['tests']
        }),
        updateTest : builder.mutation<any, testupdateType>({
            query: ({ name, price, slot, testDate, photo , details , email, id}) => ({
                url: `/updateTest?email=${email}`,
                method: 'PUT',
                body: { name, price, slot, testDate, photo , details, id}
            }),
            invalidatesTags: ['tests']
        }),
        deleteTest : builder.mutation<any, {id : string, email : string}>({
            query: ({ email, id}) => ({
                url: `/deleteTest/${id}?email=${email}`,
                method: 'DELETE',
                body: {}
            }),
            invalidatesTags: ['tests']
        }),
        getReservation : builder.query<myAppoinMentType[], { email : string, type : string }>({
            query: ({ email, type }) => `/reservation?type=${type}&email=${email}`,
            providesTags: ['reservation']
        }),
        updateReservation : builder.mutation<any, {patientId : string, report : string, reportFile : string, email : string}>({
            query: ({ email, patientId, report,  reportFile }) => ({
                url: `/updateReservation?email=${email}`,
                method: 'PUT',
                body: {patientId, report,  reportFile}
            }),
            invalidatesTags: ['reservation']
        }),
        getAllDoctors : builder.query<doctor[], {}>({
            query: () => `/doctors`,
            providesTags: ['doctors']
        })
    }) 
});

export const { useUserDashboardDataQuery, useMyAppoinmentsQuery, useDeleteAppoinmentsMutation, useGetTestResultQuery, useCreatUserMutation, useSendMailMutation, useAdminDashboardDataQuery, useAllUsersQuery, useAddTestMutation, useGetAllTestsQuery, useUpdateTestMutation, useDeleteTestMutation, useGetReservationQuery, useUpdateReservationMutation, useGetAllDoctorsQuery } = baseApi;
export default baseApi;