import { useSetting } from './useSetting';
import { useUpdateSetting } from './useUpdateSetting';

import Spinner from '../../ui/Spinner';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

function UpdateSettingForm() {
  const {
    isLoading,
    settings: {
      maxBookingsLength,
      maxGuestsPerBooking,
      minBookingsLength,
      breakfastPrice,
    } = {},
  } = useSetting();

  const { isUpdating, updateSetting } = useUpdateSetting();

  // return <Spinner />;
  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;
    console.log(value);

    if (!value) return;
    updateSetting({ [field]: value });
  }

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          defaultValue={minBookingsLength}
          onBlur={e => handleBlur(e, 'minBookingsLength')}
          disabled={isUpdating}
          id="min-nights"
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={maxBookingsLength}
          onBlur={e => handleBlur(e, 'maxBookingsLength')}
          disabled={isUpdating}
          id="max-nights"
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={e => handleBlur(e, 'maxGuestsPerBooking')}
          disabled={isUpdating}
          id="max-guests"
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          onBlur={e => handleBlur(e, 'breakfastPrice')}
          disabled={isUpdating}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingForm;
