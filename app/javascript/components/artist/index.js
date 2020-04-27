import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Heading, Image } from 'react-bulma-components';

const DivVSpaced = styled.div`
  margin-top: 10px;
`

const Artist = (props) => {
    return(
        <Link to={`/artist/${props.id}`}>
          <Image src={props.photo_url}/>
          <DivVSpaced>
            <Heading size={6} className='has-text-white'>{props.artist_name}</Heading>
          </DivVSpaced>
        </Link>
      );
}
export default Artist;