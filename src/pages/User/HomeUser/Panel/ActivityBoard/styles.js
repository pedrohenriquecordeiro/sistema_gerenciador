import styled from 'styled-components';

export const Container = styled.div`
    display: flex; /* define que a div eh uma flexbox - os filhos da div sao definidos como flex child */
    flex-direction: row; /* row eh o padrao - mas quis deixar explicito */
    padding: 30px 0;
    height: calc(100% - 80px); /* 80px do Header - so vai funcionar poq no Global defini HEIGHT como 100% */
`