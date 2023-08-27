import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://serviciopagina.upea.bo/api'
    }),
    endpoints: (builder) => ({
        getInstitucion: builder.query({
            query: () => '/InstitucionUPEA/'+process.env.REACT_APP_ID_INSTITUCION,
        }),       
        getConvocatorias: builder.query({
            query: () => '/convocatoriasAll/'+process.env.REACT_APP_ID_CARRERA,
        }),
        getCursos: builder.query({
            query: () => '/cursosAll/'+process.env.REACT_APP_ID_CARRERA
        }),
        getLinksIntExtAll: builder.query({
            query: () => '/linksIntExtAll/'+process.env.REACT_APP_ID_INSTITUCION,
        }),
        getServicios: builder.query({
            query: () => '/ServicioAll/'+process.env.REACT_APP_ID_CARRERA
        }),
        getOfertasAcademicas: builder.query({
            query: () => '/OfertasAcademicasAll/'+process.env.REACT_APP_ID_CARRERA
        }),
        getPublicaciones: builder.query({
            query: () => '/publicacionesAll/'+process.env.REACT_APP_ID_INSTITUCION
        }),
        getGacetas: builder.query({
            query: () => '/gacetaunivAll/'+process.env.REACT_APP_ID_INSTITUCION
        }),
        getEventos: builder.query({
            query: () => '/eventoAll/'+process.env.REACT_APP_ID_INSTITUCION
        }),
        getVideos: builder.query({
            query: () => '/VideosAll/'+process.env.REACT_APP_ID_INSTITUCION
        })


    })
})

export const { 
    useGetInstitucionQuery, 
    useGetConvocatoriasQuery,
    useGetCursosQuery,
    useGetServiciosQuery,
    useGetOfertasAcademicasQuery,
    useGetPublicacionesQuery, 
    useGetGacetasQuery,
    useGetEventosQuery,
    useGetVideosQuery,
} = apiSlice