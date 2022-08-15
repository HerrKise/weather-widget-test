import cityUploadService from "@/services/cityUploadService";

export async function useUploadCity(searchQuery) {
    let city;
    try {
        await cityUploadService.get(searchQuery).then((data) => {
            console.log("test", data);
            if (data.length === 0) {
                throw "Please, enter correct name";
            } else {
                console.log(data[0]);
                city = {
                    id: `id${Date.now()}`,
                    name: data[0].name,
                    country: data[0].country,
                    lat: data[0].lat,
                    lon: data[0].lon
                };
            }
        });
        return city;
    } catch (error) {
        return error;
    }
}
