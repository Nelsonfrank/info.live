import React from 'react';
import { 
    IonContent, 
    IonList, 
    IonPage, 
    IonHeader, 
    IonToolbar,
    IonButtons,
    IonIcon,
 } from '@ionic/react';
import {close} from 'ionicons/icons'
import {RouteComponentProps} from 'react-router'

const Menu: React.FC<RouteComponentProps> =(props)=>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="end" onClick={()=>props.history.push('/home')}>
                        <IonIcon icon={close} />
                    </IonButtons>                    
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="flex flex-col justify-center items-center pt-3">
                    <IonList>Menu</IonList>
                    <IonList>Updates</IonList>
                    <IonList>Class Updates</IonList>
                    <IonList>Profile</IonList>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Menu;