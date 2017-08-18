import {types} from './constants/constants';

const typesOfHomes = [
    {value: 1, label: 'Casa'},
    {value: 2, label: 'Rancho'},
    {value: 3, label: 'Casilla'},
    {value: 4, label: 'Departamento'},
    {value: 5, label: 'Pieza en inquilinato'},
    {value: 6, label: 'Pieza en hotel familiar o pensión'},
    {value: 7, label: 'Local no construido para habitación'},
    {value: 8, label: 'Vievienda móvil'},
    {value: 9, label: 'Persona/s viviendo en la calle'}
];

const exampleQuestions = [{
    id: 1,
    name: 'root',
    validator: null,
    rows: [{
        id: 9,
        questions: [
            {
                col: 100,
                number: 15,
                name: 'yearArrivedToArgentina',
                text: '¿En qué año llegó a la Argentina?',
                inputText: 'Año',
                inputUnit: null,
                ignoreText: 'Ignorado',
                ignoreValue: 9,
                type: types.TEXT_WITH_IGNORE
            }
        ]
    }, {
        id: 44,
        questions: [
            {
                name: 'physicalOrMentalDisabilities',
                number: 21,
                type: types.RADIO_TABLE,
                text: 'Debido a un problema físico, mental o emocional,' +
                ' ¿tiene dificultad permanente o limitación para...',
                options: [
                    {value: 1, text: 'No, ninguna dificultad'},
                    {value: 2, text: 'Sí, alguna dificultad'},
                    {value: 3, text: 'Sí, mucha dificultad'},
                    {value: 4, text: 'No puede hacerlo'}
                ],
                questions: [
                    {name: 'See', text: 'para ver, aún cuando usa anteojos?'},
                    {name: 'Listen', text: 'para oír, aún cuando usa audífonos?'},
                    {name: 'Walk', text: 'para caminar o subir escaleras?'},
                    {name: 'focus', text: 'para recordar o concentrarse?'},
                    {name: 'batheOrDressItself', text: 'con el cuidado personal, como bañarse o vestirse?'},
                    {
                        name: 'comunicate',
                        text: 'para comunicarse, por ejemplo entender o ser entendido por otros?'
                    }
                ]
            }
        ]
    }, {
        id: 1,
        questions: [
            {
                col: 100,
                name: 'título',
                noValidate: true,
                text: 'Este es un título.',
                type: types.TITLE
            }
        ]
    }, {
        id: 2,
        questions: [
            {
                col: 100,
                dkLabel: 'Ignorado',
                dkValue: 9,
                falseValue: 0,
                name: 'yesNo',
                text: 'Yes No question.',
                trueValue: 1,
                type: types.YES_NO
            }
        ]
    }, {
        id: 3,
        questions: [
            {
                col: 100,
                name: 'label',
                noValidate: true,
                text: 'Es un label',
                type: types.LABEL
            }
        ]
    }, {
        id: 4,
        questions: [
            {
                col: 100,
                name: 'kindOfHome',
                type: types.RADIO,
                text: 'Tipo de vivienda particular',
                number: 1,
                options: [
                    {value: 1, label: 'Casa'},
                    {value: 2, label: 'Rancho'},
                    {value: 3, label: 'Casilla'},
                    {value: 4, label: 'Departamento'},
                    {value: 5, label: 'Pieza en inquilinato'},
                    {value: 6, label: 'Pieza en hotel familiar o pensión'},
                    {value: 7, label: 'Local no construido para habitación'},
                    {value: 8, label: 'Vievienda móvil'},
                    {value: 9, label: 'Persona/s viviendo en la calle'}
                ]
            }]
    }, {
        id: 5,
        questions: [
            {
                col: 50,
                number: 2,
                name: 'residueTypeGeneratedSolid',
                text: 'Sólidos',
                type: types.CHECKBOX
            },
            {
                col: 50,
                number: null,
                name: 'residueTypeGeneratedLiquid',
                text: 'Líquidos',
                type: types.CHECKBOX
            }
        ]
    }, {
        id: 6,
        questions: [
            {
                col: 100,
                number: 14,
                name: 'select',
                options: typesOfHomes,
                text: 'Tipo de casas',
                type: types.SELECT
            }
        ]
    }, {
        id: 8,
        questions: [
            {
                col: 100,
                max: 500,
                min: 1,
                maxLength: 3,
                number: 555,
                name: 'number',
                text: 'Input Number',
                type: types.NUMBER
            }
        ]
    }, {
        id: 9,
        questions: [
            {
                col: 100,
                number: 15,
                name: 'text',
                text: 'Input text',
                type: types.TEXT
            }
        ]
    }]
}];

export default exampleQuestions;
