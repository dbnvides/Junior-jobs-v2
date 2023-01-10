import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    background-color: var(--color-primary);

    @media (min-width: 768px) {
        border-radius: 0 0 0 70px;
    }

    nav {
        display: flex;
        height: 100%;
        max-width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    img {
        width: 120px;
        height: 74px;
    }

    .boxMenu {
        display: flex;
        width: 80px;
        height: 50px;
        font-size: 20px;
        color: white;
        align-items: center;
        gap: 10px;

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 50px;
            height: 50px;
            border-radius: var(--radius-2);
            overflow: hidden;

            font-size: 30px;
            border-radius: var(--radius-2);
            background-color: var(--grey-2);
            transition: 0.1s ease;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:hover {
                border: 2px solid var(--white);
                cursor: pointer;
            }
        }

        button {
            font-size: 25px;
            color: var(--white);
        }
    }
`;

export const StyledHeaderNoUser = styled(StyledHeader)`
    height: 100px;
`;
