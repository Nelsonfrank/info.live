import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';

import { RouteComponentProps} from 'react-router'
import React from 'react';
import './Home.css';

const HomePage: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={()=> props.history.push('/home/menu')}>
            <IonIcon name="menu" />
          </IonButtons>
          <IonTitle>Daruso</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card" onClick={()=>props.history.push('/home/newspage')}>
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt=""/>
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.
            </p>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
