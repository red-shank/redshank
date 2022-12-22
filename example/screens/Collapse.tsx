import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  Text,
  InputScrollView,
  Collapse,
  Icon,
  Space,
} from '@redshank/native';

const CollapseScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Collapse</Title>
          <Collapse>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              eum maiores molestiae molestias neque, quas qui voluptatum. A
              aliquam aliquid at dolores fuga impedit necessitatibus nisi totam
              ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  autem blanditiis dolore dolores, fuga laboriosam magni modi
                  necessitatibus optio provident tempore totam. Eaque libero non
                  provident quas quos sed veritatis!
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Without Accordion</Title>
          <Collapse accordion={false}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              consequatur doloribus eveniet facere fuga fugiat, in ipsa
              molestias nemo nobis odit, pariatur quidem rerum saepe sint, sit
              tempore veniam vitae?
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci dignissimos eius nihil provident ratione sed
                  suscipit. Animi, dolorum esse exercitationem in nam officia
                  praesentium quisquam repellendus reprehenderit saepe tenetur
                  voluptas!
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>With subtitle</Title>
          <Collapse>
            <Collapse.Panel
              title="Panel 1"
              subTitle="This is s subtitle"
              id="1"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi deserunt distinctio doloremque ea ex, excepturi
              expedita hic in laborum natus nobis praesentium quis quisquam
              repudiandae sint tenetur ullam vitae!
            </Collapse.Panel>
            <Collapse.Panel
              title="Personal Info"
              subTitle="This is s subtitle"
              id="2"
            >
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  autem blanditiis dolore dolores, fuga laboriosam magni modi
                  necessitatibus optio provident tempore totam. Eaque libero non
                  provident quas quos sed veritatis!
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Nested Collapse</Title>
          <Collapse>
            <Collapse.Panel title="Panel 1" id="1">
              <Collapse accordion={false}>
                <Collapse.Panel title="Panel 1" id="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  asperiores deserunt hic magnam, neque nobis omnis sequi ut
                  veritatis voluptatem. Delectus illum laboriosam libero
                  pariatur possimus quaerat reiciendis suscipit vero?
                </Collapse.Panel>
                <Collapse.Panel title="Personal Info" id="2">
                  <View>
                    <Title level={3}>Hi Kevin!</Title>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eius hic itaque sed. Asperiores assumenda, aut blanditiis
                      consectetur delectus dolor doloribus exercitationem
                      magnam, maiores numquam quia, ratione sint totam
                      voluptatem voluptatum?
                    </Text>
                  </View>
                </Collapse.Panel>
              </Collapse>
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus aliquam commodi, cum facere obcaecati reiciendis sit
                  ut? Accusamus adipisci deleniti eius ipsum molestias officiis
                  omnis optio, porro quo, rerum sapiente.
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Custom icon collapse</Title>
          <Collapse icon={<Icon type="material" name="wb-sunny" size={18} />}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              natus optio! Asperiores at cum ipsam libero non nostrum qui quo
              quos sequi ullam? Alias deleniti inventore nesciunt non,
              praesentium sunt.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi, architecto, dolore ea exercitationem fuga laboriosam
                  minima nesciunt nihil placeat praesentium quasi sapiente
                  voluptas voluptatum. Assumenda enim id minima reprehenderit
                  voluptate?
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Borderless</Title>
          <Collapse borderless>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              ipsam nihil odit pariatur? Dolorum expedita minus natus
              repellendus sed? Cum dicta impedit incidunt magnam molestiae nemo,
              nostrum perspiciatis porro veritatis!
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci animi aperiam dolores error ex ipsam, maxime odit
                  quis rem vitae! Adipisci assumenda at deserunt dolore
                  doloribus fugit odit soluta velit.
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Show Arrow</Title>
          <Collapse borderless showArrow={false}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              natus, voluptatibus. Accusamus aperiam architecto delectus, dicta
              distinctio exercitationem hic id, ipsum iste maxime nobis, omnis
              perferendis praesentium provident quis rem?
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  dolores doloribus, ducimus earum fugiat ipsa libero nemo nobis
                  quisquam quo sit totam, vero. Cupiditate harum iure magnam
                  quo, tenetur voluptas!
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Open Keys</Title>
          <Collapse openKeys={['1']} onChange={console.log}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              consequuntur cumque, doloremque error expedita, maiores
              necessitatibus obcaecati optio placeat provident quia ratione
              recusandae tenetur voluptate voluptatem. Ad repudiandae tempora
              temporibus?
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus cum dolorum eaque eos id minus natus necessitatibus
                  omnis porro quae quam qui, recusandae rem repudiandae rerum,
                  soluta temporibus unde veritatis?
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Disabled Panel</Title>
          <Collapse>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              dolore dolorem similique tenetur vero. Aliquam at dolor dolores
              facilis minima, modi nemo nisi nostrum pariatur qui recusandae ut
              veritatis, voluptatum.
            </Collapse.Panel>
            <Collapse.Panel disabled title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus cum dolorum eaque eos id minus natus necessitatibus
                  omnis porro quae quam qui, recusandae rem repudiandae rerum,
                  soluta temporibus unde veritatis?
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Default Open Keys</Title>
          <Collapse defaultOpenKeys={['2']} accordion>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, et
              eum eveniet ex ipsam nostrum omnis perspiciatis quo repellat
              soluta ullam veritatis? Distinctio iure nostrum possimus quam
              ratione sapiente, veritatis!
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium ad, assumenda cumque deleniti exercitationem
                  libero minima modi neque non optio porro qui suscipit
                  voluptates. Animi aperiam aspernatur deserunt quis tempore?
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View style={styles.space}>
          <Title level={3}>Icon Position</Title>
          <Space orientation="vertical" gutter={[0, 50]}>
            <Collapse iconPosition="left">
              <Collapse.Panel title="Panel 1" id="1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis cum, eum nihil nulla porro quia quos repudiandae ut?
                Aspernatur dicta ea esse explicabo magni modi obcaecati
                quibusdam recusandae saepe voluptate!
              </Collapse.Panel>
              <Collapse.Panel title="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi asperiores aspernatur at aut corporis deleniti dolore
                    eius explicabo facilis, hic ipsum iste modi molestias
                    mollitia perspiciatis quisquam sunt tenetur ullam.
                  </Text>
                </View>
              </Collapse.Panel>
            </Collapse>
            <Collapse iconPosition="right">
              <Collapse.Panel title="Panel 1" id="1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                eligendi exercitationem, id illum iusto odit quis repellendus
                velit vitae. Consectetur cumque, dolor facere libero molestias
                omnis vero vitae. Error, nobis!
              </Collapse.Panel>
              <Collapse.Panel title="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum doloribus ducimus iste laboriosam minima natus officiis
                    omnis quis vel veritatis? Esse ipsum optio quia quibusdam
                    rem sequi similique, temporibus veniam?
                  </Text>
                </View>
              </Collapse.Panel>
            </Collapse>
          </Space>
        </View>

        <View style={styles.space}>
          <Title level={3}>Custom background</Title>
          <Space orientation="vertical" gutter={[0, 50]}>
            <Collapse borderless headerColor="transparent">
              <Collapse.Panel title="Panel 1" id="1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                distinctio labore maiores praesentium reprehenderit totam unde
                voluptatibus voluptatum. Doloremque eius esse ex fugit impedit,
                iure nobis pariatur quaerat saepe voluptates!
              </Collapse.Panel>
              <Collapse.Panel title="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius eos, explicabo itaque laboriosam laborum neque nobis
                    sequi! Ab et eveniet, id iusto laboriosam molestiae quasi
                    quod sed, ut veritatis voluptatem.
                  </Text>
                </View>
              </Collapse.Panel>
            </Collapse>
            <Collapse
              borderColor="rgba(255, 100, 100, .8)"
              headerColor="rgba(255, 100, 100, .8)"
              contentColor="rgba(50, 50, 255, .6)"
            >
              <Collapse.Panel title="Panel 1" id="1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                aliquam consectetur debitis deleniti ea, eius esse explicabo
                fugiat ipsum laudantium molestias neque nihil nobis quidem quis
                quisquam quo saepe voluptate!
              </Collapse.Panel>
              <Collapse.Panel title="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam asperiores atque aut autem consequuntur debitis
                    delectus deleniti ducimus est fuga, fugiat, laudantium
                    magnam, modi molestiae odio quibusdam quisquam vitae
                    voluptatibus!
                  </Text>
                </View>
              </Collapse.Panel>
            </Collapse>
          </Space>
        </View>
        {/* END */}
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default CollapseScreen;
