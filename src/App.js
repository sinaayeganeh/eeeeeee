import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import "./Carddd.css";
import {
  Epic,
  Tabbar,
  TabbarItem,
  Panel,
  PanelHeader,
  HorizontalScroll,
  Div,
  Button,
  Search,
  Group,
  RichCell,
  Avatar,
  UsersStack,
  Banner,
  Link,
  Header,
  CardGrid,
  Card,
  Separator,
  Counter,
  FormLayout,
  Input,
  FormLayoutGroup,
  Radio,
  Textarea
} from "@vkontakte/vkui";

import Home from "./panels/Home";
import Persik from "./panels/Persik";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStory: "feed"
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange(e) {
    this.setState({ activeStory: e.currentTarget.dataset.story });
  }

  render() {
    return (
      <Epic
        activeStory={this.state.activeStory}
        tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "feed"}
              data-story="feed"
              text="Меню"
            >
              <img
                src="https://image.flaticon.com/icons/svg/1046/1046849.svg"
                width="26"
                height="26"
              />
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "discover"}
              data-story="discover"
              text="История"
            >
              <img
                src="https://image.flaticon.com/icons/svg/2928/2928999.svg"
                width="26"
                height="26"
              />
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "messages"}
              data-story="messages"
              text="Новости"
            >
              <img
                src="https://image.flaticon.com/icons/svg/1074/1074106.svg"
                width="26"
                height="26"
              />
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "notifications"}
              data-story="notifications"
              label="2"
              text="Козрина"
            >
              <img
                src="https://image.flaticon.com/icons/svg/679/679713.svg"
                width="26"
                height="26"
              />
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "more"}
              data-story="more"
              text="Настройки"
            >
              <img
                src="https://image.flaticon.com/icons/svg/1085/1085821.svg"
                width="26"
                height="26"
              />
            </TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === "of"}
              data-story="of"
              text="Оформление заказа"
            />
          </Tabbar>
        }
      >
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Меню</PanelHeader>
            <Search />
            <HorizontalScroll>
              <div style={{ display: "flex" }}>
                <Div>
                  <Button mode="tertiary">Все меню</Button>
                </Div>
                <Div>
                  <Button mode="tertiary">Пицца D30см</Button>
                </Div>
                <Div>
                  <Button mode="tertiary">Пицца D40см</Button>
                </Div>
                <Div>
                  <Button mode="tertiary">Блюда за магниты</Button>
                </Div>
                <Div>
                  <Button mode="tertiary">Наборы</Button>
                </Div>
                <Div>
                  <Button mode="tertiary">Пироги до 16:00</Button>
                </Div>
              </div>
            </HorizontalScroll>
            <Group>
              <Banner
                header="Пицца Барбекю NEW"
                before={
                  <Avatar size={96} src="http://pizza29.h1n.ru/pizza.png" />
                }
                subheader={
                  <React.Fragment>
                    Ветчина, бекон, свежие шампиньоны, соус барбекю, с...
                    <br />
                    580 г
                  </React.Fragment>
                }
                asideMode="expand"
                onClick={() => console.log("[Podcast banner] onClick")}
                actions={
                  <React.Fragment>
                    <Button>В корзину 490₽</Button>
                  </React.Fragment>
                }
              />

              <Banner
                header="Пицца Жгучая NEW"
                before={
                  <Avatar
                    size={96}
                    src="https://image.flaticon.com/icons/svg/2836/2836694.svg"
                  />
                }
                subheader={
                  <React.Fragment>
                    Пепперони, колбаски охотничьи, томаты, болгарский перец,
                    маслины, соус сальса+барбекю, сыр Моцарелла, острый перец
                    Халапеньо. (очень острая!)
                    <br />
                    630 г
                  </React.Fragment>
                }
                asideMode="expand"
                onClick={() => console.log("[Podcast banner] onClick")}
                actions={
                  <React.Fragment>
                    <Button>В корзину 480₽</Button>
                  </React.Fragment>
                }
              />
              <Banner
                header="Пицца Тарантелла"
                before={
                  <Avatar
                    size={96}
                    src="https://image.flaticon.com/icons/png/512/1404/1404894.png"
                  />
                }
                subheader={
                  <React.Fragment>
                    Карбонад (или Охотничьи колбаски), ветчина, п\к колбаса, на
                    соусе из сочных томатов с сыром Моцарелла.
                    <br />
                    730 г
                  </React.Fragment>
                }
                asideMode="expand"
                onClick={() => console.log("[Podcast banner] onClick")}
                actions={
                  <React.Fragment>
                    <Button>В корзину 580₽</Button>
                  </React.Fragment>
                }
              />

              <Banner
                header="Пицца Домашняя"
                before={
                  <Avatar
                    size={96}
                    src="https://image.flaticon.com/icons/png/512/1404/1404945.png"
                  />
                }
                subheader={
                  <React.Fragment>
                    С\к бекон, с\к балык, карбонад, фасоль, шампиньоны
                    консервированные, маринованный лучок на соусе Барбекю с
                    сыром Моцарелла.
                    <br />
                    700 г
                  </React.Fragment>
                }
                asideMode="expand"
                onClick={() => console.log("[Podcast banner] onClick")}
                actions={
                  <React.Fragment>
                    <Button>В корзину 610₽</Button>
                  </React.Fragment>
                }
              />
            </Group>
          </Panel>
        </View>
        <View id="discover" activePanel="discover">
          <Panel id="discover">
            <PanelHeader>История</PanelHeader>
            <Banner
              header="Дата заказа - 01.05.2020"
              subheader="Заказ: Пицца Жгучая NEW, Пицца Барбекю NEW"
            />
            <Banner
              header="Дата заказа - 10.05.2020"
              subheader="Заказ: Пицца Домашняя, Пицца Магия"
            />
          </Panel>
        </View>
        <View id="messages" activePanel="messages">
          <Panel id="messages">
            <PanelHeader>Новости и акции</PanelHeader>
          </Panel>
        </View>
        <View id="notifications" activePanel="notifications">
          <Panel id="notifications">
            <PanelHeader>Козрина</PanelHeader>
            <Group>
              <RichCell
                disabled
                multiline
                before={
                  <Avatar
                    size={72}
                    src="https://image.flaticon.com/icons/svg/1404/1404894.svg"
                  />
                }
                caption="630 г"
                after="480 ₽"
                actions={
                  <React.Fragment>
                    <Button mode="secondary">+</Button> 1&nbsp;&nbsp;
                    <Button mode="secondary">-</Button>
                  </React.Fragment>
                }
              >
                Пицца Жгучая NEW
              </RichCell>

              <RichCell
                disabled
                multiline
                before={
                  <Avatar
                    size={72}
                    src="https://image.flaticon.com/icons/png/512/1404/1404945.png"
                  />
                }
                caption="800 г"
                after="580 ₽"
                actions={
                  <React.Fragment>
                    <Button mode="secondary">+</Button> 1&nbsp;&nbsp;
                    <Button mode="secondary">-</Button>
                  </React.Fragment>
                }
              >
                Пицца Луиджи
              </RichCell>
            </Group>
            <Separator />
            <FormLayout>
              <Button size="xl" after=" 1 060 ₽">
                Заказать
              </Button>

              <Button size="xl" mode="secondary">
                Очистить
              </Button>
            </FormLayout>
          </Panel>
        </View>
        <View id="more" activePanel="more">
          <Panel id="more">
            <PanelHeader>Настройки</PanelHeader>
            <Header>Бонусные баллы - </Header>
            <Separator />
          </Panel>
        </View>

        <View id="of" activePanel="of">
          <Panel id="of">
            <PanelHeader>Оформление заказа</PanelHeader>
            <FormLayout>
              <Input top="Телефон" />
              <FormLayoutGroup>
                <Radio name="type" defaultChecked>
                  Доставка
                </Radio>
                <Radio
                  name="type"
                  description="При самомывазе скидка 20% на весь чек"
                >
                  С собой
                </Radio>
              </FormLayoutGroup>

              <Input top="Улица" />
              <Input top="дом" />
              <Input top="корпус" />
              <Input top="квартира" />

              <Textarea
                top="Коментарий к заказу"
                placeholder="Тут вы можите оставить коментарии к заказу"
              />
            </FormLayout>
            <Separator />
            <Group>
              <RichCell
                disabled
                multiline
                text="Сумма скидки - 212 ₽"
                after="848 ₽"
              >
                Итого
              </RichCell>
            </Group>
            <Button size="xl">Заказать</Button>
          </Panel>
        </View>
      </Epic>
    );
  }
}

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  /* return (
		<Example />
    <View activePanel={activePanel}>
      <Home id="home" fetchedUser={fetchedUser} go={go} />
      <Persik id="persik" go={go} />
    </View>
  );*/
  return <Example />;
};

export default App;
