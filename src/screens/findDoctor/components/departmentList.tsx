import React, { useEffect, useState } from "react";
import { DefaultText } from "../../../components/texts";
import { DefaultSection } from "../../../components/Views";
import { FlatList } from "react-native";
import { DefaultTouchableOpacity } from "../../../components/touchableOpacity";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useAllDepartmentsQuery } from "../../../api/department";
import { Department } from "../../../types/departments";
import { capitalizeName } from "../../../../ulitity/capitalizeName";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/dispatchAndSelector";
import {
  selectDepartmentSelector,
  selectDept,
} from "../../../redux/selectDepartment";

const DepartmentList = () => {
  const dispatch = useAppDispatch();
  const [departments, setDepartments] = useState<Department[]>();
  const { data } = useAllDepartmentsQuery();
  const selectDepartment = useAppSelector(selectDepartmentSelector);
  const allCatagoryAddtoApi = () => {
    const allCatagoryObject = {
      department_id: 0,
      department_name: "all",
      created_at: new Date().toISOString(),
    };
    if (data) {
      const object: Department[] = [allCatagoryObject, ...data];
      setDepartments(object);
    }
  };
  useEffect(() => {
    allCatagoryAddtoApi();
  }, [data]);

  return (
    <DefaultSection styles={{ paddingTop: hp(2) }}>
      <FlatList
        data={departments}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: Department }) => (
          <DefaultTouchableOpacity
            handler={() =>
              dispatch(selectDept({ department_id: item.department_id }))
            }
            styles={{
              borderWidth: 1,
              height: hp(5),
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "hsla(212, 52%, 23%, 1)",
              backgroundColor:
                selectDepartment.department_id === item.department_id
                  ? "hsla(212, 52%, 23%, 1)"
                  : "transparent",
              marginRight: wp(4),
              paddingHorizontal: wp(5),
            }}
          >
            <DefaultText>{capitalizeName(item.department_name)}</DefaultText>
          </DefaultTouchableOpacity>
        )}
        keyExtractor={(item) => item.department_id.toString()}
      />
    </DefaultSection>
  );
};

export default DepartmentList;
