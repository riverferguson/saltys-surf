import React, { useEffect, useState } from 'react';
import { Header, Grid, Image, Card, SegmentInline, Segment } from 'semantic-ui-react';


export default function Home() {


  return (
    <div>


      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2">Salty's Surfshop</Header>
            <Segment>paragraph.
            <br/>
            <br/>
            paragraph.
            <br/>
            <br/>
            paragraph.
            <br/>
            <br/>
            paragraph.
            <br/>
            <br/>
            paragraph.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9B0oeodlIGBlTdP6Nv81tZc_3FTpgIIsdDw&usqp=CAU" alt="wave picture" floated="right"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )}