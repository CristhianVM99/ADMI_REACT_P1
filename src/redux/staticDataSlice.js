import { createSlice } from "@reduxjs/toolkit";
const Index = {
    //BANNER
    txt_Banner : 'La Universidad Pública de El Alto, forjando profesionales para el desarrollo de Bolivia.',
    txt_Btn: 'Categorias',
    txt_Redes: 'Redes Sociales',

    //AUTORIDADES
    txt_Title_Autoridades: 'Nuestras <br> Autoridades',

    //VIDEO
    txt_Title_Video: 'En las alturas de El Alto, la UPEA es un faro de educación y progreso.',

    //CONVOCATORIAS, COMUNICADOS, AVISOS 
    txt_Title_Convocatorias: 'Lo Ultimo de Convocatorias, Comunicados y Avisos',
    txt_Title_Button_Convocatorias_Cursos: 'Ver Mas',

    //CURSOS, SEMINARIOS
    txt_Title_Cursos: 'Lo Ultimo de Cursos y Seminarios',

    //LINKS EXTERNOS
    txt_Title_Links_Externos: 'Links Externos',
    txt_Description_Links_Externos: 'Los links que pertenecen a la carrera de ',   
    
    //FOOTER 
    txt_Description_Text_Footer: '"La UPEA es una universidad que te da las herramientas para cambiar el mundo"',
    txt_Link_Universidad_Publica_De_El_Alto: 'https://www.upea.bo/',
}
const TestimonialSlider = {
    //AUTORIDADES
    txt_Description_Autoridades: 'El liderazgo verdadero se forja en la capacidad de inspirar y guiar a otros hacia un futuro que todos anhelamos. Recordemos siempre que nuestras acciones no solo moldean el presente, sino que también trazan el camino hacia un mañana mejor para nuestra comunidad y para las generaciones venideras.'
}

const Developer = {
    //DESARROLLADOR 
    CVM_link: 'https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/'
}
const initialState = {
    staticData: {
        Index,
        TestimonialSlider,
        Developer,
    },    
};

const staticDataSlice = createSlice({
    name: "staticData",
    initialState,
    reducers: {},
})

export default staticDataSlice.reducer;
