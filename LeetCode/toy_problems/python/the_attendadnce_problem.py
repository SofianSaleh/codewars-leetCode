import frappe


def get_checkins(checkins):
    latest_entry_by_user = {}
    filtered_data = []

    for entry in checkins:
        user = entry['employee_id']
        log_type = entry['log_type']

        # print(not not latest_entry_by_user.get(user, {}), log_type)

        if latest_entry_by_user.get(user, {}):
            ent = latest_entry_by_user.get(user, {})
            if log_type == 'IN':
                print(log_type == 'IN')

                if ent.get(log_type) == 'IN' and date_diff(entry['time'], ent.get('time')) > 0:
                    filtered_data.append(entry)
                    latest_entry_by_user[user] = entry
        else:
            print('test', entry['checkin_name'])
            if log_type == 'IN':
                filtered_data.append(entry)
                latest_entry_by_user[user] = entry
