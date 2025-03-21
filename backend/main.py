from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

middleware_stack = app.middleware_stack

class Item(BaseModel):
    id: int = None
    name: str
    category: str
    price: float
    description: str

items: list[Item] = [
    Item(
        id=0,
        name="Montre connectée FitPulse",
        category="Accessoires",
        price=89.99,
        description="Montre intelligente avec suivi du sommeil et GPS."
    ),
    Item(
        id=1,
        name="Clavier mécanique TypeX",
        category="Informatique",
        price=129.99,
        description="Clavier gaming avec switches mécaniques et rétroéclairage RGB."
    ),
    Item(
        id=2,
        name="Casque VR VisionX",
        category="Électronique",
        price=249.99,
        description="Casque de réalité virtuelle avec écran OLED."
    ),
    Item(
        id=3,
        name="Souris ergonomique ErgoGrip",
        category="Informatique",
        price=39.99,
        description="Souris sans fil avec capteur optique avancé."
    ),
    Item(
        id=4,
        name="Tablette graphique SketchPro",
        category="Informatique",
        price=199.99,
        description="Tablette graphique avec 8192 niveaux de pression."
    ),
    Item(
        id=5,
        name="Chargeur sans fil QuickCharge",
        category="Accessoires",
        price=29.99,
        description="Chargeur rapide compatible avec tous les smartphones."
    ),
    Item(
        id=6,
        name="Enceinte Bluetooth SoundWave",
        category="Électronique",
        price=69.99,
        description="Enceinte portable étanche avec 12h d'autonomie."
    ),
    Item(
        id=7,
        name="Clé USB 256 Go SpeedData",
        category="Informatique",
        price=59.99,
        description="Clé USB ultra rapide avec cryptage intégré."
    ),
    Item(
        id=8,
        name="Sac à dos UrbanTravel",
        category="Mode",
        price=69.99,
        description="Sac à dos imperméable avec port USB intégré."
    ),
    Item(
        id=9,
        name="Lunettes de soleil PolarMax",
        category="Accessoires",
        price=34.99,
        description="Lunettes polarisées avec protection UV400."
    ),
    Item(
        id=10,
        name="Smartphone NeoPhone X",
        category="Électronique",
        price=599.99,
        description="Smartphone 5G avec triple capteur photo."
    ),
    Item(
        id=11,
        name="PC portable UltraBook Pro",
        category="Informatique",
        price=1199.99,
        description="Ultrabook avec écran tactile et processeur Intel i7."
    ),
    Item(
        id=12,
        name="Baskets running SpeedFlex",
        category="Mode",
        price=79.99,
        description="Baskets de course ultra légères et respirantes."
    ),
    Item(
        id=13,
        name="Montre classique SilverTime",
        category="Mode",
        price=49.99,
        description="Montre élégante en acier inoxydable."
    ),
    Item(
        id=14,
        name="Machine à café ExpressoPro",
        category="Maison",
        price=179.99,
        description="Machine à café automatique avec mousseur de lait."
    ),
    Item(
        id=15,
        name="Aspirateur robot CleanBot",
        category="Maison",
        price=249.99,
        description="Aspirateur intelligent avec cartographie 3D."
    ),
    Item(
        id=16,
        name="Lampe de bureau LED BrightDesk",
        category="Maison",
        price=39.99,
        description="Lampe LED avec réglage de température de couleur."
    ),
    Item(
        id=17,
        name="Bracelet connecté HealthBand",
        category="Accessoires",
        price=59.99,
        description="Suivi du rythme cardiaque et notifications."
    ),
    Item(
        id=18,
        name="Jeu vidéo CyberQuest",
        category="Jeux vidéo",
        price=59.99,
        description="Jeu d'aventure futuriste en monde ouvert."
    ),
    Item(
        id=19,
        name="Pack de stylos encre gel",
        category="Papeterie",
        price=9.99,
        description="Lot de 10 stylos avec encre fluide."
    ),
    Item(
        id=20,
        name="Chaise de bureau ErgoChair",
        category="Mobilier",
        price=249.99,
        description="Chaise ergonomique avec soutien lombaire."
    ),
    Item(
        id=21,
        name="Appareil photo InstaSnap",
        category="Électronique",
        price=129.99,
        description="Appareil instantané avec impression photo."
    ),
    Item(
        id=22,
        name="Vélo électrique SpeedRide",
        category="Mobilité",
        price=899.99,
        description="Vélo électrique pliable avec autonomie 50 km."
    ),
    Item(
        id=23,
        name="Parfum Élégance Noire",
        category="Beauté",
        price=79.99,
        description="Parfum mixte avec notes boisées et vanillées."
    ),
    Item(
        id=24,
        name="Livre 'L'Art du Code'",
        category="Livres",
        price=24.99,
        description="Livre sur les bonnes pratiques en programmation."
    ),
    Item(
        id=25,
        name="Set de casseroles inox MasterCook",
        category="Cuisine",
        price=129.99,
        description="Casseroles en acier inoxydable avec revêtement antiadhésif."
    ),
    Item(
        id=26,
        name="Montre GPS TrailRunner",
        category="Accessoires",
        price=219.99,
        description="Montre GPS avec altimètre et suivi de performances."
    ),
    Item(
        id=27,
        name="Housse PC 15 pouces UrbanProtect",
        category="Accessoires",
        price=29.99,
        description="Housse rembourrée pour ordinateurs portables."
    ),
    Item(
        id=28,
        name="Caméra de surveillance SmartView",
        category="Maison",
        price=79.99,
        description="Caméra WiFi avec détection de mouvement."
    ),
]

@app.get("/")
def read_root():
    return {"Hello": "World"}

# Get all items with limit option
@app.get("/items", response_model=list[Item])
def list_items(limit: int = None):
    return items if limit is None else items[:limit]

# Get item by id
@app.get("/items/{item_id}", response_model=Item)
def get_item(item_id: int) -> Item:
    item = next((item for item in items if item.id == item_id), None)
    if item is None:
        raise HTTPException(status_code=404, detail=f"Item {item_id} not found")
    return item

# Add new product
@app.post("/items", response_model=Item)
def create_item(item: Item):
    new_id = max((i.id for i in items), default=0) + 1
    new_item = Item(id=new_id, **item.dict(exclude={"id"}))
    items.append(new_item)
    return new_item

# Update item by id
@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, updated_item: Item):
    for index, item in enumerate(items):
        if item.id == item_id:
            items[index] = updated_item
            return updated_item

    raise HTTPException(status_code=404, detail=f"Item {item_id} not found")

# Delete item by id
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    global items
    if any(item.id == item_id for item in items):
        items = [item for item in items if item.id != item_id]
        return {"message": f"Item {item_id} supprimé avec succès"}
    
    raise HTTPException(status_code=404, detail=f"Item {item_id} not found")