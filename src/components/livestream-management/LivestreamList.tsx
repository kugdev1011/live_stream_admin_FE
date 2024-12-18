import { Separator } from "@/components/ui/separator.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Play, FileSliders, CircleStop } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
	LivestreamSession
} from "@/components/livestream-management/dummyData.ts";
import { LIVESTREAM_STATUS } from "@/lib/interface.tsx";
import { formatDate } from "@/lib/date-formated.ts";

const LivestreamList = ({title, owner, description, status, startTime}: LivestreamSession) => {
	return (
		<div className="w-full mt-10">
			<Separator />
			<div className="grid grid-cols-5 mt-4">
				<div>
					<AspectRatio ratio={16 / 9}>
						<img
							src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
							alt="Image"
							className="h-full rounded-md object-cover"
						/>
					</AspectRatio>
				</div>
				<div className="col-span-3 flex flex-col text-left">
					<div className="font-semibold text-2xl">{title}</div>
					<div className="text-gray-500 text-sm">Scheduled for {formatDate(startTime, true)}</div>
					<div className="text-sm py-2">{owner}</div>
					<div className="text-sm">{description}</div>

					<div className="pt-2 flex flex-row gap-2">
						{
							status === LIVESTREAM_STATUS.STREAMING && (
								<>
									<Button variant="destructive">
										<CircleStop /> Stop
									</Button>
								</>
							)
						}
						{
							status === LIVESTREAM_STATUS.NOT_STARTED && (
								<>
									<Button variant="outline">
										<FileSliders /> Configuration
									</Button>
								</>
							)
						}
						<Button>
							<Play /> Preview
						</Button>

					</div>
				</div>
				<div className="ml-auto mr-0">
					<Badge className="text-sm">{status.toString().toUpperCase()}</Badge>
				</div>
			</div>
		</div>
	);
}

export default LivestreamList;