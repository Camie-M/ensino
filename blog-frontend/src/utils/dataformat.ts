

const DataFormat = async (createdAt: string) => {
    try {
        const dataFix = new Date(createdAt);
        let formattedDate = dataFix
            .toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            })
            .replace(" de ", " ")
            .replace(". de", " ");

        return formattedDate = formattedDate
            .split(' ')
            .map((word, index) =>
                index === 1 ? word.charAt(0).toUpperCase() + word.slice(1) : word
            )
            .join(' ');


    } catch (error) {
        console.error('Erro ao buscar Post:', error);
        return null;
    }
};


export default DataFormat;