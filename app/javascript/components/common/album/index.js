import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Heading, Image } from 'react-bulma-components';

const DivVSpaced = styled.div`
  margin-top: 10px;
`

const Album = (props) => {
    return(
        <Link to={`/album/${props.id}`}>
          <Image src={props.cover_url}/>
          <DivVSpaced>
            <Heading size={6} className='has-text-white'>{props.title}</Heading>
            <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
          </DivVSpaced>
        </Link>
      );
}
export default Album;