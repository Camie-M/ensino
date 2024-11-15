import styled from 'styled-components'

export const Header = styled.header`
    color: ${props => props.theme.colors.titles};
    margin: 2rem 0;
    padding: 1.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;

    p {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    nav {
        display: flex;
        gap: 1.375rem;
        align-items: center;

        > ol {
        display: flex;
        gap: 1.375rem;

        li {
            font-size: 20px;
            font-weight: 400;
            text-transform: none;
            
            a {
                color: ${props => props.theme.colors.titles};
            }
        }
    }
    }
`