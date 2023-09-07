import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {
  reasonList:any [] = [
    {
      title:"Un avantage concurrentiel à exploiter",
      description:"Madagascar bénéficie d'un avantage concurrentiel grâce à son coût de facteurs compétitifs tels que sa main-d'œuvre abordable à 50$ US/mois, son électricité peu coûteuse à 0,166$ US/KWh et son approvisionnement en eau à environ 0,30$ US/m3",
      image:{path: 'assets/carousel/fond_1.jpg'}
    },
    {
      title:"L'île aux trésors naturels inexplorés",
      description:"Madagascar possède une biodiversité incroyable de 90%, la plus élevée en Afrique, ainsi qu'un taux d'endémisme record dans le monde entier, offrant une expérience unique pour les amateurs de nature et de découverte.",
      image:{path: 'assets/carousel/fond_6.jpg'}
    },
    {
      title:"600 millions de consommateurs",
      description:"En ce qui concerne Madagascar, le pays est membre de plusieurs organisations régionales de libre-échange telles que la SADC, COMESA et la COI. Avec une population totale de plus de 600 millions de consommateurs potentiels.",
      image:{path: 'assets/carousel/fond_3.jpg'}
    },
    {
      title:"Dispositions douanières",
      description:" Madagascar a mis en place des dispositions douanières pour faciliter l'accès aux marchés internationaux. Le pays a signé des accords commerciaux avec plusieurs pays tels que les États-Unis et l'Union européenne, ce qui facilite l'exportation de produits vers ces marchés.",
      image:{path: 'assets/carousel/fond_7.jpg'}
    },
    {
      title:"Cadre juridique et fiscal",
      description:"Madagascar a mis en place un cadre juridique et fiscal pour encourager l'investissement. Le gouvernement a adopté des lois et des règlements pour protéger les investissements étrangers, ce qui garantit la sécurité juridique des entreprises qui investissent à Madagascar.",
      image:{path: 'assets/carousel/fond_2.jpeg'}
    }
  ]

  menusList:any [] = [
    {
      icon: "fas fa-solid fa-gem",
      title: "mines",
      link:"/tous-les-secteurs/mine"
    },
    {
      icon: "fas fa-solid fa-rug",
      title: "textiles",
      link:"/tous-les-secteurs/textiles"
    },
    {
      icon: "fas fa-location-dot fa-solid",
      title: "tourisme",
      link:"/tous-les-secteurs/tourisme"
    },
    {
      icon: "fas fa-industry fa-solid",
      title: "industries",
      link:"/tous-les-secteurs/industrie"
    },
    {
      icon: "fa-solid fa-building-wheat",
      title: "agricultures",
      link:"/tous-les-secteurs/agriculture"
    },
    {
      icon: "fa-solid fa-car",
      title: "transports",
      link:"/tous-les-secteurs/transport"
    },
    {
      icon: "fa-solid fa-road-bridge",
      title: "infrastructures",
      link:"/tous-les-secteurs/infrastructures"
    }
  ]

  conditionList:any [] = [
    {
      title:'Cadre d\'investissements',
      icon:'fas fa-solid fa-gear',
      link:'/conditions-generale',
      description:'Madagascar propose un cadre réglementaire clair qui favorise les investissements étrangers en offrant des avantages fiscaux et des facilités pour l\'implantation d\'entreprises.',
      contentLink:'Nos conditions'
    },
    {
      title:'Procédures administratives',
      icon:'fa-solid fa-code',
      link:'/procedure-administrative',
      description:'Les démarches administratives sont simplifiées pour faciliter l\'implantation et la création d\'entreprises. Les investisseurs peuvent bénéficier d\'un accompagnement personnalisé pour mener à bien leurs projets.',
      contentLink:'Voir plus'
    },
    {
      title:'Formalités',
      icon:'fa-solid fa-file',
      link:'/contactez-nous',
      description:'À Madagascar, les formalités pour l\'acquisition de permis et licences sont simplifiées. Les investisseurs peuvent bénéficier d\'un accompagnement personnalisé pour mener à bien leurs projets.',
      contentLink:'Contactez nous'
    },
    {
      title:'Calculer les coûts',
      icon:'fa-solid fa-coins',
      link:'/couts-investissements',
      description:'Les coût sont relativement bas comparés à d\'autres pays. Cela permet aux investisseurs de réaliser des économies substantielles sur les coûts de production et de se positionner plus compétitivement sur le marché.',
      contentLink:'Evaluer les coûts'
    }
  ]
}
