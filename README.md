# farms
A code challenge done in two hours.

### Technologies
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [SASS](https://sass-lang.com/)
- [Vue 2](https://vuejs.org/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [ESLint](https://eslint.org/)

### Checklist
- Grid with dinamyc items **OK**
- Dynamic background color **OK**
- Crop is identified by its name and color **OK**
- Mock information for the plots **OK**
- Interactive (hover) grid **OK**
- Scrollable grid **OK**

### Challenge
- Land is bought in plots: a plot is a n-by-m rectangular section of land that is n cells (or miles) wide and m cells (or miles) high, and plots are identified by the geohash of its northwest corner
- Farmers can buy and own one or more plots, and their plots don't have to be contiguous or anything like that
- Crops are pretty simple in Siloam Springs. A crop is identified by its name and color (e.g. "corn" and "#ffef58") and characterized by how long you have to wait after planting the crop before you can harvest it as well as how long the crop can go without rain before it withers
- The My Farmland Organizer team has ensured you that you don't have to worry about setting the harvestOn and witherOn fields when you create a document in the crop singleton collection. Their backend service automatically populates harvestOn when the document is created and will update witherOn every time it rains on a (not yet withered) crop
- The UI should revolve around an interactive, scrollable grid displaying all the plots of land in Siloam Springs
- Each cell of this grid should correspond to one square-mile cell of Siloam Springs land
- You should be able to determine and update the full height and width of this grid using the plots collection.
- The grid should react to changes to Firestore in realtime to display the state of Honeybuzz Meadow's farmland in the following fashion:
  - A cell should be gray if it not (yet) owned by Honeybuzz Meadow.
  - A plot of land owned by Honeybuzz Meadow should correspond to the color of its soil.
  - A plot of land with a crop growing on it should have a progress icon corresponding to the color of the crop.
  - A plot of land with a harvestable crop on it should have a checkmark icon corresponding to the color of the crop.
  - A plot of land with a withered (dead) crop on it should have an 'X' icon corresponding to the color of the crop.
  - A plot of land without a crop shouldn't have an icon.
  - Any icon should be centered both vertically and horizontally on its plot.
- Hovering over a plot should provide more information about that plot
- When the user hovers over a plot, display the following information in whatever manner you judge to be most user-friendy

![image](https://user-images.githubusercontent.com/31961274/148414364-629e9872-980f-4ea4-9e0d-e552744c7497.png)
