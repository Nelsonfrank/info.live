import React from 'react'
import { IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonButtons,
    IonIcon,
    IonInput
    } from '@ionic/react'
import {  arrowRoundBack, undo, share, starOutline  } from 'ionicons/icons'
import { RouteComponentProps } from 'react-router'

const NewsPage: React.FC<RouteComponentProps> =(props)=>{
    // const[value, setValue] = useState('')


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" onClick={()=>props.history.push('/home')}>
                        <IonIcon icon={arrowRoundBack} />
                    </IonButtons>
                    
                    <IonTitle>NewsPage</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <img src="/assets/shapes.svg" alt=""/>
                    <IonCardHeader>
                        <IonCardSubtitle>12/12/2019 {'  '} Mr.Hello, World</IonCardSubtitle>
                        <IonCardTitle>Hello, World</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.Now that your app has been created, you'll want to start building out features and
              components. Check out some of the resources below for next steps.</p>
              <IonToolbar>
                  <IonButtons>
                      <IonButton slot="start" onClick={()=>{}}>
                          <IonIcon icon={undo}/>
                       </IonButton>
                      <IonButton>
                          <IonIcon icon={share}/>
                      </IonButton>
                      <IonButton >
                          <IonIcon icon={starOutline}/> 
                      </IonButton>
                  </IonButtons>
              </IonToolbar>
                    </IonCardContent>
                </IonCard>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardTitle>Comments</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form className="flex flex-col ">
                <IonInput type="text" name="name" placeholder='Comment...' className=" border-2"></IonInput>
               <IonButton className="w-1/4 items-end mt-2" slot="end">Send</IonButton>
            </form>
            
          </IonCardContent>
        </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default NewsPage