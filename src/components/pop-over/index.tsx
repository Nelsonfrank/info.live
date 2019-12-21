import React from 'react'
import { IonContent, IonPopover, IonButtons, IonButton } from '@ionic/react'

const PopOver: React.FC = (item1, item2)=>{
    return(
        <IonContent>
            <IonPopover
             isOpen={false}
            >
                <IonButtons>
                    <IonButton>{item1}</IonButton>
                    <IonButton>{item2}</IonButton>
                </IonButtons>
            </IonPopover>
        </IonContent>
    )
}

export default PopOver