import { StyleSheet, View } from 'react-native';
import { Title } from '../../../Title';
import useTheme from '../../../../context/theme/useTheme';
import { useCalendarContext } from '../../context/calendar';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { useCalendarMonthContext } from '../../context/CalendarMonth';
import { locales } from '../../locales';
const buttonProps = {
    type: 'link',
    children: null,
    style: {
        paddingHorizontal: 5
    }
};
export default function MonthLabel({}) {
    const { marginSizes } = useTheme();
    const { locale } = useCalendarContext();
    const { onPrevMonth, onNextMonth, currentMonth, onToggleYearList } = useCalendarMonthContext();
    return (<View style={StyleSheet.flatten([
            style.wrapper,
            {
                marginBottom: marginSizes.sm
            }
        ])}>
      <View style={style.title}>
        <Title level={5} align="left">
          {`${locales[locale].month?.[currentMonth
            .format('MMM')
            .toLowerCase()]} ${currentMonth.format('YYYY')}`}
        </Title>

        <Button {...buttonProps} onPress={onToggleYearList} icon={<Icon name="right" color="primary" type="antdesign" size={18}/>}/>
      </View>

      <View style={style.actions}>
        <Button {...buttonProps} onPress={onPrevMonth} icon={<Icon name="left" color="primary" type="antdesign" size={18}/>}/>
        <Button {...buttonProps} onPress={onNextMonth} icon={<Icon name="right" color="primary" type="antdesign" size={18}/>}/>
      </View>
    </View>);
}
const style = StyleSheet.create({
    wrapper: {
        gap: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18
    },
    title: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    actions: {
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
