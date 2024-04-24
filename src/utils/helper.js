export function filterData(searchText, restaurants){
    const data = restaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return data;
}
